import axios from "axios";
import { useMutation, useQuery } from "react-query";

export const useUserList = ()=>{
    return useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const response = await axios("http://localhost:3009/users");
          return response.data;
        },
        enabled: true,
      });
}

export const useUserLIstMutate = ()=>{
    return useMutation({
        mutationFn: async () => {
          await axios("http://localhost:3009/users", {
            method: "POST",
            data: {
              id: 6,
              name: "Nihal Obla",
            },
          });
        },
      });
}