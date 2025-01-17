import ServerStatus from '@/components/ServerStatus';
import { InfoOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Divider, Typography } from 'antd';
import React from 'react';
import { NavLink } from 'umi';

const { Title } = Typography;

export default (): React.ReactNode => {
  document.title = "Home - Metal Gear Online";

  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <ServerStatus />
            <br />
            <p>We provide a service which allows you to play the multiplayer mode of Metal Gear Solid 4: Guns of the Patriots on PC using the <a href="https://rpcs3.net/" target="_blank">RPCS3</a> emulator.</p>
            <p>If you are looking to get started then watch our <a href="https://www.youtube.com/watch?v=nzRP6sWCSic" target="_blank">getting started video</a> or head over to our <NavLink to="/faq">frequently asked questions</NavLink> section.</p>
            <p>Feel free to stop by the <a href="https://discord.gg/MNqmzuW2wH" target="_blank">discord</a> if you have any questions.</p>
          </Card>
        </div>
      </div>

      <Divider />

      <div className="row">
        <div className="col-md-6" style={{marginBottom: "16px"}}>
          <Card>
            <img style={{maxWidth: "100%", maxHeight: "140px"}} src={require('../assets/img/banner-200.jpg')} />
           <Divider />
           <Title>Patch 2.00 is live!</Title>
           <NavLink to="/changelog"><Button type="ghost" icon={<InfoOutlined />} size="large">View Changelog</Button></NavLink>
          </Card>
        </div>
        <div className="col-md-6" style={{marginBottom: "16px"}}>
          <Card>
            <div className="container-video">
              <iframe className="video" width="10000" height="10000" src="https://www.youtube.com/embed/6W7PWfPVi74" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Card>
        </div>
      </div>

    </PageContainer>
  );
};
