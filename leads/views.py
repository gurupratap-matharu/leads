from rest_framework import generics

from .models import Lead
from .serializers import LeadSeralizer


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSeralizer
