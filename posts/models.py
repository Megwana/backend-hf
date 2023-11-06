from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    """
    Post model, related to 'owner', i.e. a User instance.
    Default image set so that we can always reference image.url.
    """
    CATEGORY_CHOICES = [
        ("Adidas", "Adidas"),
        ("Nike", "Nike"),
        ("Saucony", "Saucony"),
        ("Brooks", "Brooks"),
        ("On", "On"),
        ("Asics", "Asics"),
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=254, db_index=True)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/', default='images/banner_rzae6b', blank=True
    )
    category = models.CharField(
        max_length=16, choices=CATEGORY_CHOICES, null=True, blank=True
        )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'
