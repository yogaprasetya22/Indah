import React from "react";
import { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import QuillBlotFormatter from "quill-blot-formatter";

// Register ImageResize and QuillBlotFormatter modules
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/blotFormatter", QuillBlotFormatter);

// Custom Undo Icon Component
const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
        <path
            className="ql-stroke"
            d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
        />
    </svg>
);

// Undo Function
function undoChange() {
    this.quill.history.undo();
}

// Import and Register Size Format
const fontSizeArr = [
    "8px",
    "9px",
    "10px",
    "12px",
    "14px",
    "16px",
    "20px",
    "24px",
    "32px",
    "42px",
    "54px",
    "68px",
    "84px",
    "98px",
];

var Size = Quill.import("attributors/style/size");
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

// Modules Configuration
export const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
        },
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
    imageResize: {},
    blotFormatter: {},
};

// Formats Configuration
export const formats = [
    "font",
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "indent",
    "color",
    "list",
    "link",
    "image",
];

// Toolbar Component
export const QuillToolbar = () => (
    <div id="toolbar">
        <span className="ql-formats">
            <select className="ql-font" />
        </span>
        <span className="ql-formats">
            <select className="ql-size">
                <option value="8px">8</option>
                <option value="9px">9</option>
                <option value="10px">10</option>
                <option value="12px">12</option>
                <option value="14px">14</option>
                <option value="16px">16</option>
                <option value="20px">20</option>
                <option value="24px">24</option>
                <option value="32px">32</option>
                <option value="42px">42</option>
                <option value="54px">54</option>
                <option value="68px">68</option>
                <option value="84px">84</option>
                <option value="98px">98</option>
            </select>
        </span>
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
        </span>
        <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
        </span>
        <span className="ql-formats">
            <select className="ql-align" />
        </span>
        <span className="ql-formats">
            <button className="ql-link" />
            <button className="ql-image" />
        </span>
        <span className="ql-formats">
            <button className="ql-undo">
                <CustomUndo />
            </button>
        </span>
    </div>
);

export default QuillToolbar;
