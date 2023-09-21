import React from 'react';
import videos from './../../videos.json';

export function Video(props) {
	const {
		type,
		isPlaylist = false,
		useTitle = true,
		title = 'Tutorials',
		video,
		subtitlePrefix = '',
	} = props;

	let link = '';
	let subtitle = '';

	if (isPlaylist) {
		subtitle = videos[type].playlist.label;
		link = videos[type].playlist.video;
	} else {
		subtitle = videos[type].videos[video].label;
		link = videos[type].videos[video].video;
	}

	if (subtitlePrefix) {
		subtitle = `${subtitlePrefix} ${subtitle}`;
	}

	const url = `https://www.youtube.com/embed/${link}`;

	return (
		<>
			{useTitle &&
				<h2>{title}</h2>
			}
			{subtitle &&
				<h3>{subtitle}</h3>
			}
			<iframe width="560" height="315" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		</>
	);
}

export function AllVideos(props) {
	const {
		type,
	} = props;

	return (
		<>
		{Object.keys(videos[type].videos).map((video, index) => {
			const prefix = `${String(index + 1).padStart(2, '0')} - `;

			return (
				<Video key={index} type={type} video={video} useTitle={index === 0} subtitlePrefix={prefix} />
			);
		})}
		</>
	);
}

export function PlaylistLink(props) {
	const {
		type,
		label,
		link,
	} = props;

	let title = label ?? videos[type].playlist.label;
	let url = link ?? videos[type].playlist.video;

	return (
		<>
			<a href={url} target='_blank' rel='noopener noreferrer'>{title}</a>
		</>
	);
}
