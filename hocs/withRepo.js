import React from 'react';
import {
  setDisplayName,
  compose,
  withState,
  lifecycle,
} from 'recompose';
import isEmpty from 'lodash/isEmpty'

const mock_repo = {
  name       : 'nook',
  id         : 4,
  language   : 'en',
  html_url   : 'http//google.com',
  icon       : 'https://s-media-cache-ak0.pinimg.com/originals/68/86/da/6886da9dd04a24959005f577e3940c06.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

const fetchRepoById = (repoId) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if(repoId === 4){
        resolve(mock_repo)
      } else {
        reject(new Error())
      }
    }, 3000)
  })
);

export const withRepo = (displayName = 'withRepo') => (
  compose(
    setDisplayName(displayName),
    withState('repoValue', 'setRepoValue', {}),
    withState('status', 'setStatus', ''),
    lifecycle({
      componentDidMount() {
        const { repoValue, setRepoValue, setStatus } = this.props;
        if(isEmpty(repoValue)){
          setStatus('request')
          return fetchRepoById(4)
            .then((res) => {
              setRepoValue(res)
              setStatus('success')
            })
        }
      },
    })
  )
);