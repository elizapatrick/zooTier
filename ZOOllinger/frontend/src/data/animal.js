import {useParams, Link} from 'react-router';
import {Card} from '../components/ui/card';
import {Button} from '../components/ui/button';
import {Badge} from '../components/ui/badge';
import {animals} from '../data/animals';
import {animalInfoData} from '../data/activities';
import {activities} from '../data/activities';
import {reviews} from '../data/reviews';
import {ArrowLeft, Star, Users, MapPin, Clock, Calendar, TrendingUp, ThumbsUp} from 'lucide-react';

export function AnimalInfo() {
    const {id} = useParams();
    const animal = animals.find((a) => a.id === id);
    const info = animalInfoData[id || ''];
    const animalActivities = activities.filter((a) => a.animalId === id);
    const animalReviews = reviews.filter((r) => r.animalId === id).slice(0, 3);

    if (!animal || !info) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-600">Animal not found</p>
            </div>
        );
    }

    const currentHour = new Date().getHours();
    const hours = Array.from({length: 18}, (_, i) => i + 8);

    // Get max density for scaling
    const maxDensity = Math.max(...info.visitorDensity);

    const getHeatColor = (density: number) => {
        const intensity = density / maxDensity;
        if (intensity < 0.3) return 'bg-[#10b981]/20';
        if (intensity < 0.5) return 'bg-[#10b981]/40';
        if (intensity < 0.7) return 'bg-[#78350f]/40';
        if (intensity < 0.9) return 'bg-[#dc2626]/40';
        return 'bg-[#dc2626]/70';
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header Image */}
            <div className="relative h-64">
                <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Back Button */}
                <Link to="/app/animals">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 left-4 bg-white/90 hover:bg-white"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2"/>
                        Back
                    </Button>
                </Link>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h1 className="text-2xl font-bold mb-1">{animal.name}</h1>
                    <p className="text-sm italic opacity-90">{animal.scientificName}</p>
                </div>
            </div>

            <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
                {/* Stats Card */}
                <Card className="p-4 border-[#10b981]/20">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500"/>
                            <span className="text-2xl font-bold text-gray-900">{info.rating}</span>
                            <span className="text-sm text-gray-600">({info.reviewCount} reviews)</span>
                        </div>
                        <Badge variant="outline" className="bg-[#10b981]/10 text-[#065f46] border-[#10b981]/30">
                            {info.count} Animals
                        </Badge>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-700">Animals in this enclosure:</p>
                        <div className="grid grid-cols-2 gap-2">
                            {info.individuals.map((individual, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <div
                                        className="w-8 h-8 bg-[#10b981]/20 rounded-full flex items-center justify-center">
                                        <Users className="w-4 h-4 text-[#065f46]"/>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{individual.name}</p>
                                        <p className="text-xs text-gray-600">{individual.age} years, {individual.gender}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Today's Schedule */}
                {animalActivities.length > 0 && (
                    <Card className="p-4 border-[#10b981]/20">
                        <div className="flex items-center gap-2 mb-3">
                            <Calendar className="w-5 h-5 text-[#065f46]"/>
                            <h2 className="font-bold text-gray-900">Today's Activities</h2>
                        </div>
                        <div className="space-y-2">
                            {animalActivities.map((activity) => (
                                <div key={activity.id} className="p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">{activity.name}</h3>
                                        {activity.spotsLeft < 10 && (
                                            <Badge variant="outline"
                                                   className="bg-[#dc2626]/10 text-[#dc2626] border-[#dc2626]/30 text-xs">
                                                {activity.spotsLeft} left
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3"/>
                                            <span>{activity.times.join(', ')}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3"/>
                                            <span>{activity.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                )}

                {/* Visitor Density Heatmap */}
                <Card className="p-4 border-[#10b981]/20">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-[#065f46]"/>
                        <h2 className="font-bold text-gray-900">Best Time to Visit</h2>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Visitor density by hour (darker = more crowded)</p>

                    <div className="space-y-2">
                        {hours.map((hour, idx) => {
                            const density = info.visitorDensity[idx] || 0;
                            const isCurrent = hour === currentHour;

                            return (
                                <div key={hour} className="flex items-center gap-2">
                  <span className={`text-xs font-semibold w-12 ${isCurrent ? 'text-[#065f46]' : 'text-gray-600'}`}>
                    {hour}:00
                  </span>
                                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden relative">
                                        <div
                                            className={`h-full ${getHeatColor(density)} rounded-full transition-all`}
                                            style={{width: `${(density / maxDensity) * 100}%`}}
                                        ></div>
                                        {isCurrent && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Badge className="bg-[#065f46] text-white text-xs">Now</Badge>
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-xs text-gray-500 w-8 text-right">{density}%</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-4 pt-4 border-t flex items-center gap-2 text-xs">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-[#10b981]/20 rounded"></div>
                            <span className="text-gray-600">Low</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-[#78350f]/40 rounded"></div>
                            <span className="text-gray-600">Medium</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-[#dc2626]/70 rounded"></div>
                            <span className="text-gray-600">High</span>
                        </div>
                    </div>
                </Card>

                {/* Reviews Section */}
                <Card className="p-4 border-[#10b981]/20">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-gray-900">Visitor Reviews</h2>
                        <Button variant="ghost" size="sm" className="text-[#065f46]">
                            View All
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {animalReviews.map((review) => (
                            <div key={review.id} className="pb-4 border-b last:border-0">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="font-semibold text-gray-900">{review.userName}</p>
                                        <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {Array.from({length: review.rating}).map((_, i) => (
                                            <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500"/>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
                                <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#065f46]">
                                    <ThumbsUp className="w-3 h-3"/>
                                    <span>Helpful ({review.helpful})</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    <Button className="w-full mt-4 bg-[#065f46] hover:bg-[#064e3b]">
                        Write a Review
                    </Button>
                </Card>

                {/* About Card */}
                <Card className="p-4 bg-[#10b981]/5 border-[#10b981]/30">
                    <h3 className="font-semibold text-gray-900 mb-2">About {animal.name}</h3>
                    <p className="text-sm text-gray-700">{animal.description}</p>
                </Card>
            </div>
        </div>
    );
}

