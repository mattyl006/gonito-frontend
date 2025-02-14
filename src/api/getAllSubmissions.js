import {API} from '../utils/globals';

const getAllSubmissions = (challenge, setResult, setLoading) => {
    fetch(`${API}/evaluation/${challenge}/all-submissions`)
        .then((response) => response.json(),
            (error) => {
                if (!alert('Oops, something went wrong!')) {
                    window.location.replace('/');
                }
            })
        .then((data) => {
            setResult(data);
            if (setLoading) {
                setLoading(false);
            }
        });
};

export default getAllSubmissions;
