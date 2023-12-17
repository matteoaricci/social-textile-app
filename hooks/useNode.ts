import { Comment } from '@/types/comment';

const useNode = () => {
    const insertNode = function (tree: Comment, commentId: Comment['id'], comment: Comment) {
        if (tree.id === commentId) {
            tree.comments?.push({
                id: new Date().getTime().toString(),
                content: "new comment"
          })
      }
  };

  const editComment = (tree: Comment, commentId: Comment['id'], value: string) => {};

  const deleteNode = (tree: Comment, commentId: Comment['id']) => {};
};

export default useNode;
