from rest_framework import generics, permissions
from drf_api.permissions import IsOwnerOrReadOnly
from bookmarks.models import Bookmark
from bookmarks.serializers import BookmarkSerializer


class BookmarkList(generics.ListCreateAPIView):
    """
    List all bookmarks, i.e., all instances of a user bookmarking a post.
    Create a bookmark, i.e., bookmark a post if logged in.
    Perform_create: associate the current logged-in user with a bookmark.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = BookmarkSerializer
    queryset = Bookmark.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class BookmarkDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve a bookmark.
    No Update view, as we either bookmark or unbookmark a post.
    Destroy a bookmark, i.e., remove a bookmark if owner.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = BookmarkSerializer
    queryset = Bookmark.objects.all()
