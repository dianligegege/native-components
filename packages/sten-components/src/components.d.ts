/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface NTable {
        "chargeShadow": () => Promise<void>;
        "columns": Array<any>;
        "data": Array<any>;
        "fixedHead": boolean;
        "getDom": () => Promise<void>;
        "getSize": () => Promise<void>;
        "height": string;
        "tableClass": string;
        "watchScroll": () => Promise<void>;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNTableElement extends Components.NTable, HTMLStencilElement {
    }
    var HTMLNTableElement: {
        prototype: HTMLNTableElement;
        new (): HTMLNTableElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "n-table": HTMLNTableElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface NTable {
        "columns"?: Array<any>;
        "data"?: Array<any>;
        "fixedHead"?: boolean;
        "height"?: string;
        "tableClass"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "n-table": NTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "n-table": LocalJSX.NTable & JSXBase.HTMLAttributes<HTMLNTableElement>;
        }
    }
}
