import {FC, memo} from 'react';
import * as React from 'react';
import styled from '@emotion/styled';
import {Container} from '../../ui-kit/container/container.component';
import {SpeakerTO} from '../../../view-models/data.view-model';
import {mediaMd} from '../../../utils/css.utils';
import {Social} from '../../ui-kit/social/social.component';

//#region styled
const SpeakerStyled = styled.div`
	padding-bottom: 20px;
	// padding-top: 20px;
	${mediaMd} {
		// padding-bottom: 40px;
	}
`;
const TextStyled = styled.div`
	margin: 20px 0;
	font-weight: bold;
	font-size: 30px;
	${mediaMd} {
		font-size: 26px;
	}
`;
const PhotoWrapperStyled = styled.div`
	width: 100%;
	position: relative;
`;
const PhotoStyled = styled.img`
	width: 100%;
`;
const SocialStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	grid-row-start: 3;
	width: 48px;
	height: 48px;
	${mediaMd} {
		grid-row-start: 4;
	}

	a {
		width: 100%;
		height: 100%;
	}
`;

const SocialButtons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	grid-row-start: 3;

	${SocialStyled} {
		margin-right: 4px;
	}
`;

//#endregion

interface SpeakerProps {
	className?: string;
	speaker: SpeakerTO;
}

export const Speaker: FC<SpeakerProps> = memo(({className, speaker}) => (
	<SpeakerStyled className={className} id={speaker.id}>
		<Container>
			<PhotoWrapperStyled>
				<PhotoStyled {...speaker.photo} />
			</PhotoWrapperStyled>
			<TextStyled>
				{speaker.firstName}
				<br />
				{speaker.lastName}
			</TextStyled>
			<SocialButtons>
				{speaker.socials.map(({name, link}) => (
					<SocialStyled key={`${name}-${link}`} >
						<Social type={name} link={link} about={`${speaker.firstName} ${speaker.lastName}`}/>
					</SocialStyled>
				))}
			</SocialButtons>
		</Container>
	</SpeakerStyled>
));
