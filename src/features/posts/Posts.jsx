import Post from './Post';

const fakePosts = [
  {
    id: 1,
    title: 'Fake post #1',
    imageUrl: 'https://placehold.co/500x200',
    author: {
      name: 'Peter',
      avatarUrl: 'https://placehold.co/24',
    },
    createdAt: new Date('august 1 2023').toISOString(),
    tags: ['javascript', 'react'],
    numViews: 21,
    numComments: 3,
  },
  {
    id: 2,
    title: 'Fake post #2',
    imageUrl: 'https://placehold.co/1280x600',
    author: {
      name: 'John',
      avatarUrl: 'https://placehold.co/24',
    },
    createdAt: new Date().toISOString(),
    tags: ['java', 'springboot'],
    numViews: 12,
    numComments: 4,
  },
];

function Posts() {
  const posts = fakePosts;

  return (
    <div className="grow">
      <ul className="space-y-5">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

export default Posts;
