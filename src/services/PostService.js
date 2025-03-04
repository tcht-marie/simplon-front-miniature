import { _get, _post } from "../config/AxiosConfig";

// client.interceptors.response.use(
//   (response) => {
//     sessionStorage.setItem("accessToken", response.data.accessToken);
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const PostService = () => {
  const trending = async (page, size) => {
    const token = sessionStorage.getItem("accessToken");
    const response = await _get(`/api/posts/trending`, {
      params: {
        page: page,
        size: size,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const newest = async (page, size) => {
    const token = sessionStorage.getItem("accessToken");
    const response = await _get(`/api/posts/newest`, {
      params: {
        page: page,
        size: size,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const postById = (id) => {
    return _get(`/api/posts/${id}`);
  };

  return { trending, newest, postById };
};

export default PostService;
