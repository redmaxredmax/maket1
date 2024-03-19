import { useQuery } from "@tanstack/react-query";
import request from "../../config/request"

export const useSearchData = (value) => {
    return useQuery({
        queryKey: ['all', value],
        queryFn: () => {
            if (value.length > 2) {
                return request.get('/all', { params: { title_like: value } }).then((res) => res.data)
            }
        }
    })
}