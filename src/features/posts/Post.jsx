import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helpers';

function Post({ post }) {
  const {
    id,
    title,
    imageUrl,
    createdAt,
    author,
    tags,
    numViews,
    numComments,
  } = post;

  return (
    <li>
      <Link to={`/posts/${id}`}>
        <div className="overflow-hidden rounded-md border-2 border-slate-200 bg-slate-50 transition-colors duration-300 hover:border-slate-400">
          <img src={imageUrl} alt={title} className="w-full" />
          <div className="flex gap-3 p-6">
            <div>
              <img
                src={author.avatarUrl}
                alt={author.name}
                className="mt-2 rounded-full"
              />
            </div>
            <div>
              <h5 className="font-medium">{author.name}</h5>
              <time className="text-sm text-slate-500">
                {formatDate(createdAt)}
              </time>
              <h3 className="mt-1 text-2xl font-bold">{title}</h3>
              <ul className="mt-2 flex gap-5">
                {tags.map((tag) => (
                  <li className="text-sm text-slate-500" key={tag}>
                    #{tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-5 text-slate-500">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{numViews}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                  <span className="text-sm">{numComments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Post;
