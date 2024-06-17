import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/IconType';

export function IconSettings({ color = colors.white, porcentSize = '5%' }: IconProps) {
	return (
		<Svg width={wp(porcentSize)} height={wp(porcentSize)} viewBox="0 0 24 24" fill="none">
			<Path
				d="M9.05284 24L8.56654 20.1522C8.22434 20.0389 7.87353 19.8801 7.51413 19.6761C7.15472 19.472 6.83339 19.2534 6.55012 19.0202L2.94716 20.5263L0 15.4737L3.11667 13.1441C3.08719 12.9563 3.0663 12.7676 3.05402 12.5781C3.04174 12.3887 3.0356 12.2 3.0356 12.0122C3.0356 11.8324 3.04174 11.6498 3.05402 11.4644C3.0663 11.2789 3.08719 11.0761 3.11667 10.8559L0 8.52631L2.94716 3.49801L6.53783 4.99195C6.84566 4.75064 7.17436 4.52999 7.52393 4.32999C7.87352 4.12997 8.21696 3.96923 8.55425 3.84778L9.05284 0H14.9472L15.4335 3.85994C15.8166 3.99758 16.1633 4.15831 16.4736 4.34212C16.7839 4.52593 17.097 4.74254 17.413 4.99195L21.0528 3.49801L24 8.52631L20.8342 10.8923C20.8801 11.0963 20.905 11.287 20.9091 11.4644C20.9132 11.6417 20.9153 11.8202 20.9153 12C20.9153 12.1717 20.9112 12.3462 20.903 12.5235C20.8948 12.7008 20.8653 12.9037 20.8146 13.132L23.9558 15.4737L21.0086 20.5263L17.413 19.0081C17.097 19.2575 16.7745 19.4781 16.4454 19.67C16.1162 19.8619 15.7789 20.0186 15.4335 20.1401L14.9472 24H9.05284ZM10.7229 22.1053H13.2329L13.6922 18.7215C14.3438 18.553 14.9394 18.3138 15.4789 18.0036C16.0184 17.6935 16.5387 17.2948 17.0397 16.8073L20.2129 18.1263L21.4704 15.979L18.7 13.9142C18.8064 13.587 18.8789 13.2664 18.9174 12.9522C18.9558 12.6381 18.9751 12.3207 18.9751 12C18.9751 11.6713 18.9558 11.3539 18.9174 11.0478C18.8789 10.7417 18.8064 10.4292 18.7 10.1101L21.495 8.02104L20.2375 5.87367L17.0274 7.21215C16.6001 6.76031 16.088 6.36112 15.4912 6.01457C14.8944 5.668 14.2906 5.42266 13.6799 5.27853L13.2771 1.89471H10.7425L10.3201 5.26637C9.66843 5.4186 9.0667 5.6518 8.51492 5.96597C7.96313 6.28014 7.43673 6.68501 6.93572 7.18057L3.76254 5.87367L2.50505 8.02104L5.26316 10.0543C5.15673 10.3538 5.08224 10.6656 5.03967 10.9895C4.99709 11.3134 4.97581 11.6543 4.97581 12.0122C4.97581 12.3409 4.99709 12.6632 5.03967 12.9789C5.08224 13.2947 5.15264 13.6065 5.25087 13.9142L2.50505 15.979L3.76254 18.1263L6.92343 16.8C7.40807 17.2923 7.92629 17.6956 8.47807 18.0097C9.02985 18.3239 9.63977 18.5652 10.3078 18.7336L10.7229 22.1053ZM12.0147 15.7895C13.0774 15.7895 13.9816 15.4206 14.7274 14.683C15.4732 13.9453 15.8461 13.051 15.8461 12C15.8461 10.949 15.4732 10.0547 14.7274 9.31701C13.9816 8.57937 13.0774 8.21055 12.0147 8.21055C10.939 8.21055 10.0315 8.57937 9.29227 9.31701C8.55303 10.0547 8.18341 10.949 8.18341 12C8.18341 13.051 8.55303 13.9453 9.29227 14.683C10.0315 15.4206 10.939 15.7895 12.0147 15.7895Z"
				fill={color}
			/>
		</Svg>
	);
}
