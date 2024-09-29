import axios, { AxiosError, AxiosResponse } from "axios";

import { HttpRequestModel, HttpResponseModel } from "../models/HttpsRequestModel";

function adapter<T>(response: AxiosResponse): HttpResponseModel<T> {
	return {
		body: response.data,
		statusCode: response.status,
	};
}

export async function axiosHttpsRequest<T>(data: HttpRequestModel): Promise<HttpResponseModel<T>> {
	try {
		const response: AxiosResponse = await axios.request({
			url: data.url,
			method: data.method,
			headers: data.headers,
			data: data.body,
		});

		return adapter(response);
	} catch (error) {
		const axiosError = error as AxiosError;
		const axiosResponse = axiosError.response as AxiosResponse;
		return adapter(axiosResponse);
	}
}
