import useSWR from 'swr';
import { poster } from '../../utils/api';
import { useState } from 'react';

export function useToken() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getToken = async () => {
    setIsLoading(true);
    try {
      const res = await poster(`/authentication/token`, {
        secretKey: 'loremipsum'
      });
      setIsLoading(false);
      return res?.access_token;
    } catch (error) {
      setError('Failed to get token');
      setIsLoading(false);
    }
  };

  return { getToken, isLoading, error };
}
