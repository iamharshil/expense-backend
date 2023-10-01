export async function logger() {
	console.log("logger function called");
}

export function validator() {
	console.log("validator function called");
}

export const current_time = () => {
	return Date.now();
};
