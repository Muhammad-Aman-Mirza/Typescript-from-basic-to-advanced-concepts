// Define the structure of a permission object
interface Permission {
  id: number;
  canView: boolean;
  canEdit: boolean;
  canAdd: boolean;
}

// Simulate a "FieldPermStore" with a sample permission object
const FieldPermStore = {
  permissions: [
    { id: 1, canView: true, canEdit: true, canAdd: false },
    { id: 2, canView: false, canEdit: false, canAdd: false },
    // Add other permissions as needed
  ],

  // Get a permission by ID
  GetById: function (permId: number): Permission | undefined {
    return this.permissions.find(p => p.id === permId);
  }
};

// Define the structure of a form control
interface FormControl {
  disabled: boolean;
}

// Define the structure of a form object
interface Form {
  [key: string]: FormControl;
}

/**
 * Check if a user has permission for a specific field, and disable the corresponding field in a form if necessary
 * @param permId - The permission ID to check view permission for
 * @param ctrlName - Control name to disable (optional)
 * @param form - Form object (optional)
 * @param isAdd - Pass true to check add permission instead of edit (optional)
 * @returns boolean - Returns true if the user has view permission, otherwise false
 */
function checkFieldPermission(
  permId: number | null | undefined,
  ctrlName?: string,
  form?: Form,
  isAdd: boolean = false
): boolean {
  // If permission ID is not provided, return true by default
  if (!permId) return true;

  // Get the permission object by permId
  let permission = FieldPermStore.GetById(permId);

  // If permission not found or user lacks edit/add permissions and form is provided
  if (permission && ((!isAdd && !permission.canEdit) || (isAdd && !permission.canAdd)) && form && ctrlName) {
    const control = form[ctrlName];
    if (!control) {
      console.warn('DEV: Control not found in provided form object');
    } else {
      // Disable the control if permission is lacking
      control.disabled = true;
    }
  }

  // Return whether the user has view permission
  return !!(permission && permission.canView);
}

// Example Usage:
const form: Form = {
  field1: { disabled: false },  // Sample form with control
  field2: { disabled: false }
};

// Call the function with sample data
const hasPermission = checkFieldPermission(1, 'field1', form, false);
console.log('Has view permission:', hasPermission);  // Output: Has view permission: true
console.log(form.field1);  // Output: { disabled: true }
