export const isValidEmail = (email: string) => {
	// Simple email validation using a regular expression
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};
