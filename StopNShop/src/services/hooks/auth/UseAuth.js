import { useMutation } from '@tanstack/react-query';
import { signupApi } from '../../api';
import { loginApi } from '../../api';

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await signupApi(data); // Make the API call
      return response;
    },
  });
};


export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data) => loginApi(data),
  });
};
