json.array! @locations do |location|
  json.id location.id
  json.name location.name
  json.current do
    if location.recordings.last
      json.temp location.recordings.last.temp
      json.status location.recordings.last.status
    else
      json.temp 'No recordings'
      json.status 'No recordings'
    end
  end
end
