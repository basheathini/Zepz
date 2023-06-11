import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import UserSection from '../src/components';
import {User} from '../src/types';

describe('UserSection', () => {
  test('renders users', async () => {
    let component: any;
    const mockResponse = [
      {
        account_id: 1,
        display_name: 'Athini Bashe',
        profile_image:
          'https://scontent.fcpt1-1.fna.fbcdn.net/v/t39.30808-6/332168969_916137052847792_4127116419902720872_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHid9BoFHhtPKDaciFQPnJdJpro62RmR0ommujrZGZHStDRGgsZzWH54gvUYH6MJKEmLA4PeT8Sv4MbJVKM3yCB&_nc_ohc=dXty9SSSY_wAX-RtCCm&_nc_ht=scontent.fcpt1-1.fna&oh=00_AfDHfkCX7ZmVihKZXYxEsGwd2dpp1g2QAOk40-Fr1CSl9g&oe=648A4BAD',
        reputation: 1,
      } as User,
    ];
    const mockFetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });
    globalThis.fetch = mockFetch;
    act(() => {
      component = render(<UserSection user={mockResponse[0]} />);
    });
    await waitFor(() => {
      expect(component.getByText('Athini Bashe')).toBeDefined();
    });

    globalThis.fetch;
  });
});
