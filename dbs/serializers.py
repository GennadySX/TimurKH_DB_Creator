from rest_framework import serializers
from django.shortcuts import get_object_or_404
from django.conf import settings
from django.db.models import fields
from .models import *


class DBSSerializer(serializers.ModelSerializer):
    # def update(self, instance, validated_data):
    #     instance.save()
    #     return instance

    def delete(self, request):
        db = get_object_or_404(DBSModel.objects.all())
        db.delete()
        return db

    class Meta:
        fields = (
            'id',
            'name',
            'username',
            'password',
        )
        model = DBSModel
