from rest_framework import serializers

from .models import Lead


class LeadSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('id', 'name', 'email', 'message')
