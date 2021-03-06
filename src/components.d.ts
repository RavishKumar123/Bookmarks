/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppBookmarks {
    }
    interface AppForm {
    }
    interface AppHome {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppBookmarksElement extends Components.AppBookmarks, HTMLStencilElement {
    }
    var HTMLAppBookmarksElement: {
        prototype: HTMLAppBookmarksElement;
        new (): HTMLAppBookmarksElement;
    };
    interface HTMLAppFormElement extends Components.AppForm, HTMLStencilElement {
    }
    var HTMLAppFormElement: {
        prototype: HTMLAppFormElement;
        new (): HTMLAppFormElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-bookmarks": HTMLAppBookmarksElement;
        "app-form": HTMLAppFormElement;
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppBookmarks {
    }
    interface AppForm {
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-bookmarks": AppBookmarks;
        "app-form": AppForm;
        "app-home": AppHome;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-bookmarks": LocalJSX.AppBookmarks & JSXBase.HTMLAttributes<HTMLAppBookmarksElement>;
            "app-form": LocalJSX.AppForm & JSXBase.HTMLAttributes<HTMLAppFormElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
