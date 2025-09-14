import React from "react";
import styled from "@emotion/styled";
import { Devices } from "../DesignSystem";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const StyledCheckbox = styled.input`
  width: 13px;
  height: 13px;
  min-width: 13px;
  min-height: 13px;
  margin-top: 4px;
  flex-shrink: 0;
  cursor: pointer;
  accent-color: #0071e3;
  transform: scale(1.2);

  ${Devices.tabletS} {
    width: 13px;
    height: 13px;
    min-width: 13px;
    min-height: 13px;
    transform: scale(1.3);
    margin-top: 8px;
  }
`;

const CheckboxLabel = styled.span`
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;
  user-select: none;
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Checkbox = ({
  checked,
  onChange,
  label,
  id,
  name,
  disabled = false,
  ...props
}) => {
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <CheckboxContainer>
      <StyledCheckbox
        type="checkbox"
        id={checkboxId}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {label && <CheckboxLabel htmlFor={checkboxId}>{label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};

export default Checkbox;
