/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import { slice } from "lodash";

const ListComponent = ({ children }) => {
    const componentChild = React.Children.toArray(children);

    return React.Children.map(componentChild, (child) => {
        const config = {
            ...child.props,
            number: Number(slice(child.key)[1]) + 1
        };
        return React.cloneElement(child, config);
    });
};

ListComponent.proptypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return <div>{number}. Компонент списка</div>;
};

Component.proptypes = {
    number: PropTypes.number
};

export default ChildrenExercise;
