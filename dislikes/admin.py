from django.contrib import admin
from .models import Dislike

# Dislike Admin view to navigate in the admin portal
@admin.register(Dislike)
class DislikeAdmin(admin.ModelAdmin):
    list_display = ('owner', 'post', 'created_at')
    list_filter = ('owner', 'post')
    search_fields = ('owner__username', 'post__title', 'created_at')
    date_hierarchy = 'created_at'
