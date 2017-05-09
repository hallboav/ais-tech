```shell
curl http://localhost:8888/login \
    -X POST \
    -H 'Content-Type: application/json' \
    -d '{"email":"test@test","password":"test"}'
```

```shell
curl http://localhost:8888/secure/users \
    -H 'Authorization: JWT eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdCIsImVtYWlsIjoidGVzdEB0ZXN0Iiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNDk0MzAyNjE2fQ.2MJuvzDMD3EckXbyPKuy4Ok1kDHJ_BnsgaEVwehSrVXWA2r5VK-oAjE3ZNPkbdUhpFoIf5_9iFGqvqVe4TsWFoIGBZ_uxo4E9vPvcVz4iZt6L71FVONg6acBiCaSvLORaCTWXSbQz3MJzPMIPWu9urVNNAc2VAytvpWlUZfWKtv62jdscKRR_k3-KN4b6bSpMHO1xYp8vftmat32_xDrKJUtD4E789hWE-SgyRwtl3FdNnv4sB1R_NKC2DBmpPh_kkpZDxxDK3wQ_soyEQ5HfOfO5Xx1D9Z6K5Nl5nV8lrWIGhWtJwKqMNpbByuTo-IPoZ_-TYpKarswUTyQTrc9Og';
```
