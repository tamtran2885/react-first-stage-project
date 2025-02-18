import React from "react";
import PropTypes from "prop-types";

import Title from "../../atoms/Title";
import Paragraph from "../../atoms/Paragraph";

import "./style.scss";

const Content = props => (
    <div className="m__content">
        <Title text={props.title} />
        <Paragraph text={props.text} />
    </div>
);

Content.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Content;