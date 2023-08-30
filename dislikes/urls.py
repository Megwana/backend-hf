from django.urls import path
from dislikes import views

urlpatterns = [
    path('dislikes/', views.DislikeList.as_view()),
    path('dislikes/<int:pk>/', views.DislikeDetail.as_view()),
]
