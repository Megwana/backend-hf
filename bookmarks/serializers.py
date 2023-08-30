from rest_framework import serializers
from .models import Bookmark


class BookmarkSerializer(serializers.ModelSerializer):
    """
    Serializer for the Bookmark model
    Create method handles the unique constraint on 'post' and 'bookmarked'
    """
    class Meta:
        model = Bookmark
        fields = '__all__'

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({'detail': 'possible duplicate'})
