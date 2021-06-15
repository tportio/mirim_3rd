import React, { useState, useEffect } from 'react';
import axios from 'axios';
//비동기 통신 라이브러리 사용 
function Menus() {
    const [menus, setMenus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMenus = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 menus 를 초기화하고
          setError(null);
          setMenus(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'https://60c6c0c019aa1e001769f9f8.mockapi.io/menu'
          ); //axios를 통해 API 불러오기
          setMenus(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchMenus();
    }, []);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!menus) return null;
    return (

      <ul>
        {menus.map(menu => (
          <li key={menu.id}>
              {menu.name} {menu.price} {menu.salePrice} {menu.parent}
          </li>
        ))}
      </ul>
    );
  }
  
  export default Menus;