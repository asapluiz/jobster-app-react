import { useState, useCallback } from 'react';

const useDelete = (deleteFunction:Function) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const handleDelete = useCallback(async (itemId:string, onSuccess:Function) => {
        setIsLoading(true);
        setError(null);
        try {
            await deleteFunction(itemId);
            if (onSuccess) {
              onSuccess();
            }
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [deleteFunction]);

    return { handleDelete, isLoading, error };
};

export default useDelete;
