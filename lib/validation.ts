export const personalInfoSchema = {
  firstName: (value: string) => {
    if (!value.trim()) return "First name is required"
    if (value.length < 2) return "First name must be at least 2 characters"
    return null
  },
  lastName: (value: string) => {
    if (!value.trim()) return "Last name is required"
    if (value.length < 2) return "Last name must be at least 2 characters"
    return null
  },
  email: (value: string) => {
    if (!value.trim()) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return "Please enter a valid email address"
    return null
  },
  workEmail: (value: string) => {
    if (!value.trim()) return "Work email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return "Please enter a valid work email address"
    return null
  },
  phone: (value: string) => {
    if (!value.trim()) return "Phone number is required"
    const phoneRegex = /^\+?[\d\s\-$$$$]+$/
    if (!phoneRegex.test(value)) return "Please enter a valid phone number"
    return null
  },
  dateOfBirth: (value: string) => {
    if (!value) return "Date of birth is required"
    const date = new Date(value)
    const today = new Date()
    const age = today.getFullYear() - date.getFullYear()
    if (age < 18) return "Teacher must be at least 18 years old"
    if (age > 100) return "Please enter a valid date of birth"
    return null
  },
  gender: (value: string) => {
    if (!value) return "Please select a gender"
    return null
  },
}

export const addressInfoSchema = {
  street: (value: string) => {
    if (!value.trim()) return "Street address is required"
    return null
  },
  city: (value: string) => {
    if (!value.trim()) return "City is required"
    return null
  },
  state: (value: string) => {
    if (!value.trim()) return "State/Province is required"
    return null
  },
  zipCode: (value: string) => {
    if (!value.trim()) return "ZIP/Postal code is required"
    return null
  },
  country: (value: string) => {
    if (!value.trim()) return "Country is required"
    return null
  },
}

export const emergencyContactSchema = {
  name: (value: string) => {
    if (!value.trim()) return "Emergency contact name is required"
    return null
  },
  relationship: (value: string) => {
    if (!value.trim()) return "Relationship is required"
    return null
  },
  phone: (value: string) => {
    if (!value.trim()) return "Emergency contact phone is required"
    const phoneRegex = /^\+?[\d\s\-$$$$]+$/
    if (!phoneRegex.test(value)) return "Please enter a valid phone number"
    return null
  },
  email: (value: string) => {
    if (!value.trim()) return "Emergency contact email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return "Please enter a valid email address"
    return null
  },
}
