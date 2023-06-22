import {useEffect, useState} from 'react';
import {RequestModel, User} from '../../types';
import {getUsers} from '../../api/users';
import {FlatList} from 'react-native';
import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import NetworkConnectionError from '../../components/no_network';
import UserSection from '../../components/user_card';
import { RefreshControl } from 'react-native-gesture-handler';

const DisplayUsers = ( navigation : any) => {
  const [isConnected, setConnectionState] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnectionState(state.isConnected ?? false);
    });
    fetchUsers();
    return () => {
      unsubscribe();
    };
  }, []);

  const fetchUsers = async () => {
    setRefreshing(true);
    getUsers(20).then((data: RequestModel) => {
      setUsers(data.items);
      setRefreshing(false);
    });
  };

  return (
    <>
      {isConnected ? (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={() => fetchUsers} />
          }
          data={users}
          horizontal={false}
          renderItem={({item}) => {
            const user: User = item as User;
            return <UserSection user={user} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => console.log("Load more data...")}
          onEndReachedThreshold={0}
        />
      ) : (
        <NetworkConnectionError />
      )}
    </>
  );
};

export default DisplayUsers;
