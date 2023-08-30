from django.urls import path
from .views import BookmarkList, BookmarkDetail

urlpatterns = [
    path('bookmarks/', BookmarkList.as_view(), name='bookmark-list'),
    path(
        'bookmarks/<int:pk>/', BookmarkDetail.as_view(), name='bookmark-detail'
    ),
]
