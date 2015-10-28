import React from "react";
import withFormCtx from "./form-context";

@withFormCtx
export default class Fields {

  static childContextTypes = {
    formFieldRenderer: React.PropTypes.func.isRequired
  };

  getChildContext() {
    const {children: renderFieldByTheme, formCtx, ...fieldsRest} = this.props;
    return {
      formFieldRenderer: (Comp, userFieldProps, registerInfo, validateFn, typeName) => {
        return renderFieldByTheme(Comp, {
          label: userFieldProps.label || userFieldProps.name,
          validations: validateFn(),
          type: typeName,
          id: `form-${typeName}-${registerInfo.id}`,
          fieldProps: userFieldProps,
          isDirty: registerInfo.isDirty(),
          isFocused: registerInfo.isFocused(),
          isTouched: registerInfo.isTouched(),
          hasFailedToSubmit: formCtx.getHasFailedToSubmit()
        });
      }
    };
  }

  render() {
    const {children, formCtx, ...themeFieldsProps} = this.props;
    return <div {...themeFieldsProps}>{formCtx.getUserFormProps().children}</div>;
  }
}
