import { axiosClient } from "@/utils/axios-client";

export const fetchCulture = async (country: string, language?: string) => {
  try {
    const params: any = {
      country,
      language,
    };
    const resp = await axiosClient.get(`/fetchculturedata/`, { params });
    return resp?.data;
  } catch (err: any) {
    return false;
  }
};

export const fetchFlightFare = async (
  sourceCountry: string,
  targetCountry: string
) => {
  try {
    const params: any = {
      sourceCountry,
      targetCountry,
    };
    const resp = await axiosClient.get(`/flightfare/`, { params });
    return resp?.data;
  } catch (err: any) {
    return false;
  }
};

export const fetchFood = async (country: string, language?: string) => {
  try {
    const params: any = {
      country,
      language,
    };
    const resp = await axiosClient.get(`/fetchfooddata/`, { params });
    return resp?.data;
  } catch (err: any) {
    return false;
  }
};

export const fetchLocalCustoms = async (country: string, language?: string) => {
  try {
    const params: any = {
      country,
      language,
    };
    const resp = await axiosClient.get(`/fetchlocalcustomsdata/`, { params });
    return resp?.data;
  } catch (err: any) {
    return false;
  }
};

export const fetchVisaInfo = async (
  sourceCountry: string,
  targetCountry: string
) => {
  try {
    const params: any = {
      sourceCountry,
      targetCountry,
    };
    const resp = await axiosClient.get(`/fetchvisainfodata/`, { params });
    return resp?.data;
  } catch (err: any) {
    return false;
  }
};

export const fetchTravelBudget = async (
  country: string,
) => {
  try {
    const params: any = {
      country,
    };
    const resp = await axiosClient.get(`/fetchinfodata/`, { params });
    return resp?.data;
  } catch (err: any) {
    return false;
  }
};

export const fetchWeather = async (location: string) => {
  try {
    const params: any = {
      city: location,
    };
    const resp = await axiosClient.get(`/weather/`, { params });
    return resp?.data;
  } catch (err: any) {
    return false;
  }
};
