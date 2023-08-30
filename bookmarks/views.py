from rest_framework import generics, permissions
from drf_api.permissions import IsOwnerOrReadOnly
from .models import Bookmark
from .serializers import BookmarkSerializer


class BookmarkList(generics.ListCreateAPIView):
    """
    List all bookmarks, i.e., all instances of a user bookmarking a post.
    Create a bookmark, i.e., bookmark a post if logged in.
    Perform_create: associate the current logged-in user with a bookmark.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BookmarkDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve a bookmark.
    No Update view, as we either bookmark or unbookmark a post.
    Destroy a bookmark, i.e., remove a bookmark if owner.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = BookmarkSerializer
    queryset = Bookmark.objects.all()
