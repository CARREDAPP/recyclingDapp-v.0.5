import { Provider } from 'react-redux';
import store from '@/components/redux/store';

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>
        {children}
    </Provider>
};

export default ReduxProvider;
