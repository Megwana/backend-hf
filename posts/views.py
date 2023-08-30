from django.db.models import Count, Max
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from drf_api.permissions import IsOwnerOrReadOnly
from .models import Post
from .serializers import PostSerializer


class PostList(generics.ListCreateAPIView):
    """
    List posts or create a post if logged in
    The perform_create method associates the post with the logged in user.
    """
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Post.objects.annotate(
        likes_count=Count('likes', distinct=True),
        dislikes_count=Count('dislikes', distinct=True),
        bookmarks_count=Count('bookmark', distinct=True),
        comments_count=Count('comment', distinct=True),
        latest_bookmark_created_at=Max('bookmark__created_at')
    ).order_by('-created_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'owner__followed__owner__profile',
        'likes__owner__profile',
        'dislikes__owner__profile',
        'owner__profile',
        'category',
    ]
    search_fields = [
        'owner__username',
        'title',
        'category',
    ]
    ordering_fields = [
        'likes_count',
        'dislikes_count',
        'bookmarks_count',
        'comments_count',
        'likes__created_at',
        'dislikes__created_at',
        'latest_bookmark_created_at',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a post and edit or delete it if you own it.
    """
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Post.objects.annotate(
        likes_count=Count('likes', distinct=True),
        dislikes_count=Count('dislikes', distinct=True),
        comments_count=Count('comment', distinct=True)
    ).order_by('-created_at')
