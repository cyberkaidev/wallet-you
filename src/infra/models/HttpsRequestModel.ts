export interface HttpRequestModel {
	url: string;
	method: "GET";
	headers?: Record<string, string>;
	body?: unknown;
}

export interface HttpResponseModel<T> {
	statusCode: number;
	body?: T;
	error?: string;
}
