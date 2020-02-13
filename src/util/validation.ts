//validators
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatableInput: Validatable) {
  let isValid = false;
  if (validatableInput.required) {
    isValid = validatableInput.value.toString().trim().length > 0;
  }
  if (
    validatableInput.minLength &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      validatableInput.value.trim().length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      validatableInput.value.trim().length <= validatableInput.maxLength;
  }
  if (validatableInput.min && typeof validatableInput.value === "number") {
    isValid = validatableInput.value >= validatableInput.min;
  }
  if (validatableInput.max && typeof validatableInput.value === "number") {
    isValid = validatableInput.value <= validatableInput.max;
  }
  return isValid;
}
