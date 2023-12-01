import axios from "axios";

import { ServiceResponse } from "./axios";

export interface LoginData {
  email: string;
  password: string;
}

export interface ConversationData {
  id: number;
  finished: boolean;
}

export interface StoreConversationData {
  id: string;
  conversation: ConversationData;
  content: string;
}

export interface GetDataData {
  takeaway: string;
}

export interface StoreAnswerData {
  content: string;
}

export const storeConversation = async () => {
  const res = await axios.post<ServiceResponse<StoreConversationData>>(
    `http://localhost/api/conversations/2?with=conversation`,
  );
  return res.data.data.conversation;
};

export const getData = async () => {
  const res = await axios.get<ServiceResponse<GetDataData[]>>(
    `http://localhost/api/conversations/12/daily-report`,
  );
  return res.data.data;
};
export const storeAnswer = async (
  conversationId: string,
  data: StoreAnswerData,
) => {
  const res = await axios.post<ServiceResponse<StoreConversationData>>(
    `http://localhost/api/conversations/messages/${conversationId}`,
    data,
  );
  return res.data.data;
};

export const closeConversation = async (conversationId: string) => {
  const res = await axios.put<ServiceResponse<StoreConversationData>>(
    `http://localhost/api/conversations/${conversationId}/close`,
  );
  return res.data.data;
};
