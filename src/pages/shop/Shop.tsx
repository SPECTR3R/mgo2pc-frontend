import { getUserToken } from '@/system/utility';
import { PageContainer } from '@ant-design/pro-layout';
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'umi';
import API from '../../system/api';
import ShopItemCard from './ShopItemCard';

export default (): React.ReactNode => {
  const [data, setData] = useState({ loading: true, items: [] as ShopItem[] });

  document.title = 'Reward Shop - Metal Gear Online';
  
  useEffect(() => {
    const fetchData = async () => {
      const token = getUserToken();
      const response = await API.getShopItems(token ? token : "");

      if (!response) {
        return;
      }

      setData({ loading: false, items: response.data.items });
    };

    fetchData();
  }, []);

  const itemJsx = [];
  for (const item of data.items) {
    itemJsx.push(
      <div key={item.id} className="col-md-3">
        <ShopItemCard item={item} />
      </div>,
    );
  }

  return (
    <PageContainer>
      <div className="row">
        <NavLink to="/shop" style={{marginLeft: "auto", marginRight: "auto"}}>
          <img style={{width: "512px", maxWidth: "100%"}} src={require('../../assets/img/rewardshop3.png')} />
        </NavLink>
      </div>
      <div className="row">
        <Spin spinning={data.loading} size="large"></Spin>
        {itemJsx}
      </div>
    </PageContainer>
  );
};
