import { ConfigProvider } from 'antd';
import ModalManager from './ModalManager';

const AntdLayout = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[];
}) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#006064',
                    fontFamily: 'Cairo',
                },
                components: {
                    Button: {},
                    DatePicker: {},
                    Descriptions: {},
                    Drawer: {},
                    Empty: {},
                    Form: {},
                    Input: {},
                    InputNumber: {},
                    List: {},
                    Message: {},
                    Modal: {},
                    Notification: {},
                    Popover: {},
                    Select: {},
                    Table: {},
                    Tabs: {},
                },
            }}
        >
            <ModalManager />

            {children}
        </ConfigProvider>
    );
};

export default AntdLayout;