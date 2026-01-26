import { useEffect, useRef, useState } from 'react';
import { InputBox } from '@/shared/components/InputField/InputBox';
import { highlightText } from './SearchUtils';

type SearchDoc = {
    title?: string;
    author_name?: string[];
};

type SearchResponse = {
    docs: SearchDoc[];
};

function SearchComponent() {
    const [value, setValue] = useState('');
    const [results, setResults] = useState<SearchDoc[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cacheRef = useRef<Record<string, SearchDoc[]>>({});

    // SOLUTION 1: Add debouncing
    // useEffect(() => {
    //     if (!value) return;
    //     const timer = setTimeout(async () => {
    //         try {
    //             const response = await fetch( );
    //             const data: SearchResponse = await response.json();
    //             setResult(data.docs);
    //         } catch (error) {
    //             console.error('Error while fetching the result', error);
    //         }
    //     }, 500);
    //     return () => clearTimeout(timer);
    // }, [value]);

    // SOLUTION 2: Abort previous requests and caching using useRef

    useEffect(() => {
        if (value.trim().length < 3) {
            setResults([]);
            return;
        }

        if (cacheRef.current[value]) {
            console.log('cached result', cacheRef.current);
            // It will create array an object where key will be searched term and value will be the searched result
            // [{"authorOne": result, "authorTwo": result}]
            setResults(cacheRef.current[value]);
            return;
        }
        const controller = new AbortController();  // prevent race condition by cancelling the old request
        const timer = setTimeout(async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://openlibrary.org/search.json?q=${value}`, {
                    signal: controller.signal,
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch results');
                }
                const data: SearchResponse = await response.json();

                cacheRef.current[value] = data.docs;
                setResults(data.docs);
            } catch (err: any) {
                if (err.name !== 'AbortError') {
                    setError('Something went wrong. Please try again.');
                }
            } finally {
                setLoading(false);
            }
        }, 500); // debounce delay

        // unmount the timer
        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [value]);

    const onChange = async (value: string) => {
        setValue(value);
    };

    return (
        <>
            <InputBox value={value} onChange={onChange} />
            {loading && <div>Loading...</div>}
            {error && <div style={{ color: 'red', fontSize: '15px' }}>{error}</div>}
            <ul>
                {results.map((res, index) => (
                    <li key={`${res.title}-${index}`}>
                        <strong>{highlightText(res.author_name?.[0] ?? 'Unknown Author', value)}</strong>
                        <div>{res.title || 'Unknown Book'}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SearchComponent;
