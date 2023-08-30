from rest_framework import generics, permissions
from drf_api.permissions import IsOwnerOrReadOnly
from dislikes.models import Dislike
from dislikes.serializers import DislikeSerializer


class DislikeList(generics.ListCreateAPIView):
    """
    List dislikes or create a dislike if logged in.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = DislikeSerializer
    queryset = Dislike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class DislikeDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve a dislike or delete it by id if you own it.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = DislikeSerializer
    queryset = Dislike.objects.all()
